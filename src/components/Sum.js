import React from 'react';

class Sum extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			number1 : "",
			number2 : "",
			sum : " ",
		};
		this.onHandleChange1 = this.onHandleChange1.bind(this);
		this.onHandleChange2 = this.onHandleChange2.bind(this);
	}



	onHandleChange1(event){
		const number1 =Number(event.target.value);
		this.setState(prevState => ({
			number1,
			sum : number1 + prevState.number2
		}));
		
	}

	onHandleChange2(event){
		const number2 =Number(event.target.value);
		this.setState(prevState => ({
			number2,
			sum : number2 + prevState.number1
		}));
	}


  	render() { 
		return (
			<div>  
				<div className="text-right">
					<div className="form-group row">
						<label htmlFor="number1" className="col-sm-2 col-form-label"><b>Số thứ nhất:</b></label>
						<div className="col-sm-5">
							<input type="text" name="number1" id="number1" className="form-control" placeholder="Nhập vào một số nguyên" onChange = {this.onHandleChange1}/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="number2" className="col-sm-2 col-form-label"><b>Số thứ hai:</b></label>
						<div className="col-sm-5">
							<input type="text" name="number2" id="number2" className="form-control" placeholder="Nhập vào một số nguyên" onChange = {this.onHandleChange2}/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="sum" className="col-sm-2 col-form-label"><b>Tổng:</b></label>
						<div className="col-sm-5">
							<input type="text" name="sum" id="sum" className="form-control" value = {this.state.sum ? this.state.sum : 'Vui lòng nhập giá trị không hợp lệ'} readOnly/>
						</div>
					</div>
				</div>
				<hr />
			</div>
  	);
	}
}

export default Sum;
