import React, { Component } from 'react';
import Receipt from './paymentReceipt';

class CoursePayment extends Component {
    state = {
        title: 'python',
        price: 1000,
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    Submit = (e) => {
            this.setState({
                postSubmitted: true
            });
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container d-flex justify-content-center mt-5 mb-5">
                        <div className="col-md-6"> <h3>Payment Method</h3>
      <div className="card">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header p-0" id="headingTwo">
              <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="d-flex align-items-center justify-content-between"> <span>e-Sewa</span> <img src="assets/img/esewa.png" width={30} /> </div>
                </button> </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body"> <input type="text" className="form-control" placeholder="E-sewa ID" />
               <input type="text" className="form-control" placeholder="Password" />
                <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.Submit} >Pay Now</button></div>
                </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header p-0">
              <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="d-flex align-items-center justify-content-between"> <span>Card Payment</span>
                    <div className="icons"> <img src="https://i.imgur.com/2ISgYja.png" width={30} /> <img src="https://i.imgur.com/W1vtnOV.png" width={30} />  </div>
                  </div>
                </button> </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body payment-card-body"> <span className="font-weight-normal card-text">Card Number</span>
                <div className="input"> <i className="fa fa-credit-card" /> <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-6"> <span className="font-weight-normal card-text">Expiry Date</span>
                    <div className="input"> <i className="fa fa-calendar" /> <input type="text" className="form-control" placeholder="MM/YY" /> </div>
                  </div>
                  <div className="col-md-6"> <span className="font-weight-normal card-text">CVC/CVV</span>
                    <div className="input"> <i className="fa fa-lock" /> <input type="text" className="form-control" placeholder={0.00} /> </div>
                  </div>
                </div> <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.Submit} >Pay Now</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                    <div className="col-md-6"> <h3>Payment Details</h3>
                    <div className="card">
                      <div className="d-flex justify-content-between p-3">
                        <div className="d-flex flex-column"> <span> Course Title <i className="fa fa-caret-down" /></span> </div>
                        <div className="mt-1"> <sup className="super-price">{this.state.title}</sup></div>
                      </div>
                      <hr className="mt-0 line" />
                      <div className="p-3">
                        <div className="d-flex justify-content-between mb-2"> <span>Course Price</span> <span>Rs.{this.state.price}</span> </div>
                      </div>
                      <hr className="mt-0 line" />
                      <div className="p-3 d-flex justify-content-between">
                        <div className="d-flex flex-column"> <span>Total (Rupees)</span>  </div> <span>Rs.{this.state.price}</span>
                      </div>
                      <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.Submit} >Pay Now</button>
                      </div>
                    </div>
                  </div>
                  </div>) : (
                        <Receipt title={this.state.title} price={this.state.price} />
                    )
                }
            </>
        );
    }
}

export default CoursePayment;