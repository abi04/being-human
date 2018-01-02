var React = require("react");
var createReactClass = require("create-react-class");
var helper = require("./../../utils/helper");

var Search = createReactClass({
    getInitialState: function () {
        return {
            item: "",
            location: ""
        };
    },

    handleChange: function (event) {
        var newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function (event) {
        event.preventDefault();
        this.props.updateSearch(this.state.location, this.state.item);
    },

    render: function () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <b>Search</b>
                <div className="form-group">
                    <input type="text" placeholder="by Item" className="form-control" name="item" onChange={this.handleChange} />
                </div>
                OR
                <div className="form-group">
                    <select className="form-control" name="location" onChange={this.handleChange}>
                        <option value="">by Location</option>
                        <option value="All">All Locations</option>
                        <option value="Jamaica Plain">Jamaica Plain</option>
                        <option value="Mattapan">Mattapan</option>
                        <option value="Mission Hill">Mission Hill</option>
                        <option value="North End">North End</option>
                        <option value="Roslindale">Roslindale</option>
                        <option value="South Boston">South Boston</option>
                        <option value="West End">West End</option>
                        <option value="West Roxbury">West Roxbury</option>
                        
                    </select>              
                </div>
                <button type="submit" className="btn btn-default btn-sm">Submit</button>
            </form>
        );
    }
});
module.exports = Search;