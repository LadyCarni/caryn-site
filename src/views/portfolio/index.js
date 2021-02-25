import { Route } from 'react-router-dom'
import CaseStudy from './TemplateCaseStudy';
export { default as Portfolio } from './Portfolio';

export const PortfolioRoutes = () => {
  return (
    <Route path="/portfolio/connect-api">
      <CaseStudy />
    </Route>
  )
}
