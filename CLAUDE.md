# CLAUDE.md

Project-specific instructions for working in this repo (Create React App + React Router,
SCSS, `react-helmet`). This file currently documents the **recipe pages** feature under
`/creative/recipes`, derived from the existing implementation — follow these rules when
adding, editing, or reordering recipes so new pages stay consistent with the rest of the site.

## Recipe feature: the three files a new recipe touches

Adding a recipe always means editing exactly these three places, in this order:

1. **`src/views/creative/recipes/<RecipeName>.js`** — the recipe page itself (new file).
2. **`src/views/creative/index.js`** — import the component and add one entry to the
   `CreativeRoutes` array. This is the single source of truth for routing: `src/App.js`
   maps over `CreativeRoutes` to generate `<Route>` elements, so nothing else needs to
   change for the route to go live.
3. **`src/views/creative/Recipes.js`** — import the cover image and add one entry to the
   `allRecipes` array so the recipe appears on the `/creative/recipes` listing page.

Recipe images live in `src/assets/creative/recipes/` and are always imported as JS modules
(`import Foo from 'assets/creative/recipes/foo.jpg'`), never referenced by string path.

## Routing rules

- Route path format: `/creative/recipes/<kebab-case-slug>`, e.g. `/creative/recipes/pumpkin-pie`.
- Add the route object to `CreativeRoutes` in `src/views/creative/index.js`:
  ```js
  { path: "/creative/recipes/<slug>", name: "<Display Name>", component: <ComponentName> },
  ```
  Insert it among the other `/creative/recipes/*` entries (keep all recipe routes grouped
  together, after the `/creative/recipes` listing route and before `/creative/diy`).
- Import the new recipe component near the other `recipes/*` imports at the top of the file.
- Do not add a second, separate `<Route>` anywhere else — `App.js` only needs `CreativeRoutes`
  to include the entry.
- The route `path` slug, the `link` field in `Recipes.js`, and the `og:url` meta tag inside
  the recipe page **must all match exactly**. (The codebase currently has one drifted example —
  `Shortbread.js`'s `og:url` says `/shortbread-cookies` but the real route is `/shortbread` —
  don't copy that mismatch into new pages, and fix it if you touch that file.)

## Individual recipe page format

Model new pages on `src/views/creative/recipes/Cheesecake.js` or `PumpkinPie.js`. Structure,
top to bottom:

```jsx
import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import { Helmet } from 'react-helmet';
import recipeCover from 'assets/creative/recipes/<cover-image>.jpg';
// ...additional step images as needed

const Ingredients = ({ media }) => (
  <div className={`${media} recipe-card`}>
    <h2>Ingredients</h2>
    <h3>Section name</h3>            {/* only if the recipe has multiple components */}
    <ul>
      <li><span className="amount">1 cup</span>ingredient name</li>
    </ul>
  </div>
);

const RecipeName = () => (
  <div className="creative full-height">
    <Helmet>
      <title>{"<Recipe Title> Recipe"}</title>
      <meta property="og:title" content="<Recipe Title> Recipe" />
      <meta property="og:description" content="<one-sentence description>" />
      <meta property="og:image" content={recipeCover} />
      <meta property="og:url" content="https://carynfarvour.design/creative/recipes/<slug>" />
      <meta property="og:type" content="article" />
    </Helmet>
    <Breadcrumb routes={CreativeRoutes} className="creative-view" />
    <div className="creative-body-container">
      <div className="creative-body">
        <div className="recipe-body">
          <h1>{"<Recipe Title>"}</h1>
          <div className="prep-info">
            <div className="prep-info-detail"><strong>Prep Time</strong><p>...</p></div>
            {/* Cook Time, Wait Time (only if applicable), Total Time, Serves/Servings, Yield (only if applicable) */}
          </div>
          <div className="recipe-cover">
            <img src={recipeCover} alt="<short description>" />
          </div>
          <Ingredients media="mobile" />
          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <p><span className="instruction-step prep-step">Step 1.</span> ...</p>
            {/* one <p> per step, image(s) between steps where helpful */}
          </div>
        </div>
        <Ingredients media="desktop sticky" />
      </div>
    </div>
  </div>
);

export default RecipeName;
```

Rules embedded in that template:

- **No `CreativeHeader`** on individual recipe pages — that component is only used on the
  `Recipes.js` listing page. Every existing recipe page confirms this; don't add it.
- **`Ingredients` is rendered twice**: once with `media="mobile"` inline before the
  instructions (shown only on small screens via CSS), and once with `media="desktop sticky"`
  as a sibling of `.recipe-body` (shown only on desktop, sticky-positioned). Both renders
  must have identical content — they're the same data, just responsive placement.
- **Ingredient list items** always use `<span className="amount">` for the quantity, followed
  by the ingredient text with no separating space in the JSX (the CSS handles spacing).
- **Instruction steps** are each their own `<p>`, with a leading
  `<span className="instruction-step <type>-step">Step N.</span>`. Valid `<type>` values (each
  maps to a distinct icon via CSS) are exactly these six — don't invent new ones:
  - **`prep`** — rinsing, cutting/measuring raw ingredients, mise en place, preheating the
    oven or otherwise setting up equipment, and shaping or coating dough/patties before
    they're cooked.
  - **`stir`** — stirring, whisking, beating, kneading, folding, combining — any step whose
    defining action is mixing ingredients together, *and no real cooking heat is applied to
    the food in that step*.
  - **`cook`** — any step where heat is actually applied to cook the food to doneness: baking,
    frying, boiling, simmering, sautéing, grilling. This takes priority over `prep`/`stir`
    when a step does both (e.g. "combine, then bring to a boil and simmer 25 minutes" is
    `cook`, not `stir`) — but merely warming/melting something as a means to combine it (e.g.
    microwaving chocolate chips to melt them, warming milk to proof yeast) stays `stir`/`prep`,
    since the food isn't being cooked to doneness.
  - **`decorate`** — adding a finishing/decorative touch — topping, garnish, glaze, frosting,
    sprinkles, decorative shaping — to a component that **isn't yet the complete, ready-to-eat
    dish**: either it still needs to cook (sprinkles pressed into raw dough before baking) or
    it still needs to set/chill/rest before it's done (spreading topping on a cheesecake that
    then refrigerates for 4 hours; topping fudge that still needs to firm up in the fridge).
  - **`wait`** — resting, cooling, chilling, proofing, rising — any step whose defining action
    is waiting, with nothing else meaningfully happening to the food, *and the step doesn't
    mention serving*.
  - **`serve`** — the step where the dish is complete and ready to eat: final plating/assembly
    of all the components together (even if it includes a garnish), cutting the finished dish
    to portion it, and any step that explicitly mentions serving (e.g. "let stand 10 minutes
    before serving"). The test for `serve` vs. `decorate`/`wait`: is this the step where the
    dish becomes ready to eat *right now*? If yes, `serve` — even if it also involves a garnish
    or a short rest. If the dish needs more cooking or a longer set/chill before it's actually
    ready, use `decorate` or `wait` instead.
- **Tips/asides** use `<p className="tip">...</p>`, dropped between instruction steps where
  relevant. Non-tip asides use `<p><b>Note:</b> ...</p>`.
- **`prep-info` fields** are flexible — include only what applies (e.g. omit `Wait Time` if
  there's no waiting/chilling step; add `Yield` only for recipes where yield isn't obvious
  from servings, like pies).
- `<title>` and `og:title` are always `"<Recipe Title> Recipe"` (title + literal word "Recipe").
- Recipe pages do not set up their own routing or navigation — `Breadcrumb` (driven by the
  current URL, not the `routes` prop) is the only in-page nav element.

## Recipes listing page (`Recipes.js`) — thumbnail & ordering rules

### `allRecipes` entry shape

```js
{
  title: "<Recipe Title>",       // same string used for <h1> on the recipe page
  image: RecipeCoverImage,       // imported cover image
  link: "/creative/recipes/<slug>",  // must match the route path exactly, or "#" if unpublished
  category: "Desserts" | "Appetizers" | "Mains" | "Misc",
  thumb: "item" | "item rectangle" | "item large-square",  // + " soon" suffix if unpublished
  id: "<uuid-v4>",               // e.g. crypto.randomUUID(); small placeholder ints only appear on old "soon" entries
}
```

### Thumbnail size (`thumb` field)

The grid (`.creative-thumbs` in `creative.scss`) is a dense auto-flow CSS grid where each cell
defaults to a square. The `thumb` string controls footprint and must be one of:

- `"item"` — 1×1 square (default; use for most recipes).
- `"item rectangle"` — spans 2 columns × 1 row. Use for a wide/landscape hero photo.
- `"item large-square"` — spans 2×2. Use sparingly, for a standout recipe you want to feature
  more prominently.

Pick the size based on the image's aspect ratio and how much visual weight the recipe should
have on the grid — not on publish order.

### Publishing state: "coming soon" placeholders

- A recipe **not yet built** gets `link: "#"` and `thumb` suffixed with `" soon"` (e.g.
  `"item rectangle soon"`), which overlays a "Coming Soon!" badge via the `.soon` CSS class
  and disables navigation. Its `id` can be a plain placeholder integer.
- When that recipe is actually built: **edit the existing placeholder entry in place** — swap
  `link` from `"#"` to the real path, drop the `" soon"` suffix from `thumb`, and replace the
  placeholder `id` with a real UUID. Do not delete the placeholder and add a fresh entry
  elsewhere; do not leave a duplicate.
- If a newly-built recipe never had a placeholder, add its entry directly (no placeholder
  step needed).

### Ordering in the array

- **All published recipes (real `link`) come before all "coming soon" placeholders.** This is
  the one hard rule — never interleave a `soon` entry above a published one.
- Within the published block, order is chosen manually for how the thumbnail grid looks
  (mixing `item` / `rectangle` / `large-square` sizes so the grid reads well) — it is **not**
  strictly chronological by add date. When adding a new published recipe, place it wherever
  it balances the grid visually; there's no fixed insertion point.
- Within the "coming soon" block, order is similarly informal — new placeholders are typically
  appended at the end.
- `categories` (the filter sidebar) is a separate, static array of `{ name, value, id }`; only
  edit it if introducing a genuinely new category — the existing four (`Desserts`,
  `Appetizers`, `Mains`, `Misc`) cover all current recipes.
