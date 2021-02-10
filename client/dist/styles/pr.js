class App extends React.Component {
    constructor() {
        super()
        this.state = {
            area : '',
            sort : '',
            priceLevel : ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        var {name, value, type, checked} = event.target
        type === 'checkbox' ?  this.setState (
            {dietaryRestrictions : {
            ...this.state.dietaryRestrictions,
            [name] : checked
            }}
        ) : this.setState ({ [name] : value });
    }

    handleSubmit(event){
        console.log('handleSubmit submitted' ,event.target)
    }

    render() {
        return (

                <form onClick= {this.placeSearch}>
                    <input
                        name = "area"
                        value ={ this.state.area }
                        placeholder="Brooklyn"
                        onChange = {this.handleClickChange} /><br />
                 <label>
                    <input
                        type ='radio'
                        name = 'priceLevel'
                        value = '$'
                        checked = {this.state.priceLevel === '$'}
                        onChange = {this.handleClickChange} /> $
                </label><br />
                <label>
                    <input
                        type ='radio'
                        name = 'priceLevel'
                        value = '$$'
                        checked = {this.state.priceLevel === '$$'}
                        onChange = {this.handleClickChange} /> $$
                 <label>
                    <input
                        type ='radio'
                        name = 'priceLevel'
                        value = '$$$'
                        checked = {this.state.priceLevel === '$$$'}
                        onChange = {this.handleClickChange} /> $$$
                </label><br />
                <label>
                    <input
                        type ='radio'
                        name = 'priceLevel'
                        value = '$$$$'
                        checked = {this.state.priceLevel === '$$$$'}
                        onChange = {this.handleClickChange} /> $$$$
                </label><br />
                </label><br />
                    <select
                        name="sort"
                        value = {this.state.sort}
                        onChange = {this.handleClickChange}>
                      <option value="">-- options --</option>
                      <option value ='best_match'> Best_match </option>
                      <option value ='rating'> Rating </option>
                      <option value ='review_count'> Review </option>
                      <option value ='distance'> distance </option>
                    </select> <br />
                    <button> Submit </button>
                </form>

        )
    }
}
