import React,{Component} from "react";

export default class CustomersList extends Component{

    state = {
        appTitle: "Customers",
        customersCount: 5,
        customers:[
            {
                id: 1,
                name: "Scott",
                phone: "123-456",
                adderss: {city: "Cercado", depart: "Cochabamba"},
                photo: "https://picsum.photos/id/1014/60"
            },
            {
                id: 2,
                name: "Diego",
                phone: "789-012",
                adderss: {city: "Trinidad", depart: "Beni"},
                photo: "https://picsum.photos/id/1010/60"
            },
            {
                id: 3,
                name: "Jhimy",
                phone: "345-678",
                adderss: {city: "Sierra", depart: "Santa Cruz"},
                photo: "https://picsum.photos/id/1011/60"
            },
            {
                id: 4,
                name: "Scarlet",
                phone: null,
                adderss: {city: "Sucre", depart: "Chiquisaca"},
                photo: "https://picsum.photos/id/1012/60"
            },
            {
                id: 5,
                name: "Jhoana",
                phone: null,
                adderss: {city: "Cobija", depart: "Pando"},
                photo: "https://picsum.photos/id/1013/60"
            }
        ]
    }

    // customerNameStyle = (custName) =>{
    //     if (custName.startsWith("S")) return "green-highlight border-left"
    //     else if (custName.startsWith("D")) return "red-highlight border-right"
    //     else return ""
    // }

    render() {
        return <div>
            <h4 className="m-1 p-1">
                {this.state.appTitle}
                <span className="badge bg-secondary m-2">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>
    }

    //Executes when the user clicks on Refresh button
    onRefreshClick = () =>{
        this.setState({
            customersCount: 10
        })
    }

    getPhoneToRender = (phone) =>{
        if (phone)
            return phone
        else {
            return <div className="bg-warning p-2 text-center">No Phone</div>
        }
    }

    getCustomerRow = () =>{
        return this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary"
                                    onClick={()=>{this.onChangePictureClick(cust, index)}}>
                                Change Picture
                            </button>
                        </div>
                    </td>
                    {/*<td className={this.customerNameStyle(cust.name)}>{cust.name}</td>*/}
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.adderss.city}</td>
                </tr>
            )
        })}

    // Executes when the user clicks on "Change Picture" button in the grid
    // Receives the "customer" object and index of the currently clicked customer
    onChangePictureClick = (cust, index) =>{
        // console.log(cust)
        // console.log(index)

        // get existing customers
        var custArr = this.state.customers
        custArr[index].photo = "https://picsum.photos/id/104/60"

        // update "customers" array in the state
        this.setState({customers: custArr})
    }
}