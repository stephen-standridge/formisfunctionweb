import { Article, Link } from '../../media';
import { orderBy } from 'lodash';
import './contact.scss';

class ContactComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = { active: {} };
	}
	render() {
		const { component, classNames, isActive } = this.props;
		const { active } = this.state;
		return <div className={`contact__wrapper contact__wrapper ${classNames && classNames.wrapper || ''}` }>
				<div className={`contact__information contact__information ${classNames && classNames.information || ''}`}>
					{ component.information && component.information.map((info, i) => <Article classNames={ { body: 'clickable' } } slug={info.slug} key={i}/> )}
				</div>
				<div className={`contact__links contact__links ${classNames && classNames.links || ''}`}>
					{ component.links && component.links.map((l, i) => <Link slug={l.slug} key={i}/> )}
				</div>
		  </div>
	}
}

export { ContactComponent }

