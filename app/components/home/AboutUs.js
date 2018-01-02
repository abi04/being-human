var React = require("react");
var createReactClass = require("create-react-class");
var AboutUs = createReactClass({
    render: function () {
        return (
            <div id="about-us" className="row">
                <div className="container-fluid">
                    <div id="about-text" className="col-md-7">
                        <h2>AboutUs</h2>
                        <p>
                            We believe homelessness in Boston can be solved.
                            According to a report by the Task Force on Individual Homelessness in the January 27 count,
                            5,621 people were unsheltered, an increase of 14 percent from last year, and 3,495 were in shelters, down 6 percent.
                        </p>
                        
                        <blockquote>
                            "The goal is to build more of a connection between the Boston community and its housing insecure neighbors."
                        </blockquote>
                        <p>
                            Our app showcases these clients’ wish lists which are put together by their caseworkers. The goal
                            is to build more of a connection between the Boston community and its housing insecure neighbors.
                            Instead of wondering where exactly their donated items go, people will know the items go directly 
                            to clients in need.
                        </p>                      

                    </div>                    
                </div>
            </div>
        );
    }
});
module.exports = AboutUs;