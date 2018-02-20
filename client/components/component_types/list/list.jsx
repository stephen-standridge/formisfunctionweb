import { ComponentCreator } from '../../component';
import { MediaCreator } from '../../media';

import makeClassNames from 'classnames';
import './list.scss';

class ListComponent extends React.Component {
  renderNavigation() {
    const { component, setComponentState, slug, currentSlug, param } = this.props;
    return <div className="list__links">
      { component && component.views && component.views.map((list, i) => {
        return <div key={i}
          className={`list__link  ${currentSlug == list.slug ? 'active' : ''}`}
          onClick={function(){setComponentState(list.slug)}} />
      }) }
    </div>
  }
  renderOneView() {
    const { slug, component, children, currentSlug } = this.props;
    const { options, views } = component;
    const view = views.filter((v) => v.slug == currentSlug)[0];
    const active = view.slug == currentSlug;
    const classNames = makeClassNames("list__entry", { active });
    console.warn(view);
    return <div className="list__content--wrapper">
      <div className={classNames}>
        <ComponentCreator slug={view.slug} isActive={active} withHistory={false} />
      </div>
    </div>    
  }  
  renderAllViews() {
    const { slug, component, children, nextSlug, prevSlug, currentSlug, setComponentState } = this.props;
    const { options, views } = component;

    return <div className="list__content--wrapper">
      { views && views.map((c, index) => {
        let active = c.slug == currentSlug;
        let prev = c.slug == prevSlug;
        let next = c.slug == nextSlug;
        const classNames = makeClassNames("list__entry", { active, next, prev });

          return <div key={index} className={classNames} onClick={function(){ if(active) return; setComponentState(c.slug);}}  >
            <ComponentCreator key={index} slug={c.slug} isActive={active} withHistory={false} isPrev={prev} isNext={next} />
          </div>
      }) }
    </div>    
  }
  render(){
    const { component, classNames, currentSlug } = this.props;
    const { options } = component;
    return <div className={`list__container ${classNames}`}>
      { options.side_navigation && this.renderNavigation() }
      <div className="list__wrapper">
        <div className="list__wrapper--inner">
          <div className="list__content">
            { options.side_navigation && this.renderOneView() || this.renderAllViews() }
          </div>
          <div className="list__visuals"> 
            <MediaCreator slug={currentSlug} collection={"visuals"} active={true} />
          </div>
        </div>
      </div>
    </div>
  }
}
export { ListComponent }
