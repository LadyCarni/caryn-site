import { Route } from 'react-router-dom'
import CaseStudy from './TemplateCaseStudy';
import DevLondon from './DevLondon';
export { default as Portfolio } from './Portfolio';

export const PortfolioRoutes = () => {
  return (
    <>
      <Route path="/portfolio/connect-api">
        <CaseStudy />
      </Route>
      <Route path="/portfolio/dev-london">
        <DevLondon />
      </Route>
    </>
  )
}
