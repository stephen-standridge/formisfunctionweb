class LineComponent extends React.Component {
	render(){
		const { className } = this.props;
		return <div className={`line ${className}`}>
		</div>
	}	
}
export { LineComponent }