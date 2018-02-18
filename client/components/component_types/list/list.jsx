import { ComponentCreator } from '../../component';
import makeClassNames from 'classnames';
import './list.scss';

class ListComponent extends React.Component {
  render(){
    const { slug, component, classNames, children, nextSlug, prevSlug, currentSlug, setComponentState } = this.props;

    return <div className={`list__container ${classNames}`}>
      <div className="list__entries">
      { component && component.views && component.views.map((c, index) => {
        let active = c.slug == currentSlug;
        let prev = c.slug == prevSlug;
        let next = c.slug == nextSlug;
        const classNames = makeClassNames("list__entry", { active, next, prev });
        if (active || prev || next) {
          return <div key={index} className={classNames} onClick={function(){ if(active) return; setComponentState(c.slug);}}  >
            <ComponentCreator key={index} slug={c.slug} isActive={active} withHistory={false} isPrev={prev} isNext={next} />
          </div>
        }
      }) }
      </div>
    </div>
  }
}
export { ListComponent }