import { connect } from 'react-redux';
import moment from 'moment';
import './date.scss'

class DateMedia extends React.Component {
	constructor(props){
		super(props);
		this.state = { active: {} };
	}
	classNamesFor(part){
		const { classNames } = this.props;
		const { active } = this.state;

		return `date__media date__${part} ${classNames && classNames[part] || ''} ${active[part] ? 'active' : ''}`
	}
	render(){
		const { date, classNames, children } = this.props;
		console.warn(this.props)
		if (!date) return <div className={this.classNamesFor('not_found')} />
		const { day, month, year } = date;
		return <div className={`${this.classNamesFor('wrapper')}`}>
			{ day && <div className={`josefin_regular med_color med text ${this.classNamesFor('day')}`}>
				{ day }
			</div> }
			{ month && <div className={`josefin_regular med_color med text ${this.classNamesFor('month')}`}>
			{ month }
			</div> }
			{ year && <div className={`josefin_regular med_color med text ${this.classNamesFor('year')}`}>
			{ year }
			</div> }						
		</div>
	}
}

const mapStateToProps = (state, ownProps) => {
	console.warn(state.media.toJS(), ownProps.slug)
	const date = state.media.getIn(['dates', ownProps.slug]);
  return { date: date && date.toJS() };
}

const Date = connect(
	mapStateToProps
)(DateMedia)

export {Date}
