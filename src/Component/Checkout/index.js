import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcartRequestedAction, cartRequestedAction, deletecartRquestedAction } from '../../Redux/Action/cartAction';
import Layout from '../Layout';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import { billRequestedAction, billResetedAction } from '../../Redux/Action/billAction';

const total_price = function (arr, qty, price) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * b.product[price];
	}, 0);
};
const Checkout = () => {
	const dispatch = useDispatch();
	const dsCart = useSelector((state) => state.gio_hang.gio_hang);
	const bill = useSelector((state) => state.hoa_don.hoa_don);
	let [count, setCount] = useState(0);
	const [phivc, setPhivc] = useState('20000');

	const delete_Cart = (id) => {
		const gio_hang = {
			id_sp: id
		};
		dispatch(deletecartRquestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};
	const addToCart = (id, gia, count) => {
		const gio_hang = {
			id_sp: id,
			so_luong: count,
			gia: gia
		};
		dispatch(addcartRequestedAction(gio_hang));
		dispatch(cartRequestedAction());
	};
	const incrementCount = () => {
		count = count + 1;
		setCount(count);
	};
	const decrementCount = () => {
		count = count - 1;
		setCount(count);
	};
	const initialValues = {
		id_kh: '',
		ho_ten: '',
		sdt: '',
		email: '',
		ngay_dat: '',
		ngay_giao: '',
		dia_chi: '',
		da_duyet: '',
		da_thanh_toan: '',
		da_giao_hang: '',
		phi_van_chuyen: '20000',
		Ma_buudien: '1999'
	};
	const onSubmit = (values) => {
		const user = {
			ho_ten: values.ho_ten,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			sdt: values.sdt,
			dia_chi: values.dia_chi,
			phi_van_chuyen: values.phi_van_chuyen,
			Ma_buudien: values.Ma_buudien,
			gio_hang: dsCart.cart.ctcart
		};
		console.log(user);
		dispatch(billRequestedAction(user));
		dispatch(billResetedAction());
	};
	return (
		<Layout>
			<section id="cart_items">
				<div className="container">
					{/*/breadcrums*/}
					<div className="step-one">
						<h2 className="heading">Step1</h2>
					</div>
					<div className="checkout-options">
						<h3>New User</h3>
						<p>Checkout options</p>
						<ul className="nav">
							<li>
								<label>
									<input type="checkbox" /> Register Account
								</label>
							</li>
							<li>
								<label>
									<input type="checkbox" /> Guest Checkout
								</label>
							</li>
						</ul>
					</div>
					{/*/checkout-options*/}
					<div className="register-req">
						<p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
					</div>
					{/*/register-req*/}
					<div className="shopper-informations">
						<div className="row">
							<div className="col-sm-3">
								<div className="shopper-info">
									<p>Shopper Information</p>
									<form>
										<input type="text" placeholder="Display Name" />
										<input type="text" placeholder="User Name" />
										<input type="password" placeholder="Password" />
										<input type="password" placeholder="Confirm password" />
									</form>
									<a className="btn btn-primary" href="true">
										Get Quotes
									</a>
									<a className="btn btn-primary" href="true">
										Continue
									</a>
								</div>
							</div>
							<div className="col-sm-5 clearfix">
								<div className="bill-to">
									<p>Bill To</p>
									<Formik initialValues={initialValues} onSubmit={onSubmit}>
										{(props) => (
											<Form>
												<div className="form-one Form-abc">
													<input
														type="text"
														className={classNames('Email*', {
															'is-invalid': props.touched.email && props.errors.email
														})}
														placeholder="Email* "
														id="email"
														name="email"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.email}
													/>
													{props.touched.email && props.errors.email && (
														<div id="invalid-feedback">{props.errors.email}</div>
													)}
													<input type="text" placeholder="Title" />
													<input
														type="text"
														className={classNames('Ngaydat*', {
															'is-invalid': props.touched.ngay_dat && props.errors.ngay_dat
														})}
														placeholder="ngay_dat* "
														id="ngay_dat"
														name="ngay_dat"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.ngay_dat}
													/>
													{props.touched.ngay_dat && props.errors.ngay_dat && (
														<div id="invalid-feedback">{props.errors.ngay_dat}</div>
													)}
													<input
														type="text"
														className={classNames('First Name *', {
															'is-invalid': props.touched.ho_ten && props.errors.ho_ten
														})}
														placeholder="Ho Va Ten *"
														id="ho_ten"
														name="ho_ten"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.ho_ten}
													/>
													{props.touched.ho_ten && props.errors.ho_ten && (
														<div id="invalid-feedback">{props.errors.ho_ten}</div>
													)}
													<input
														type="text"
														className={classNames('Address 1 *', {
															'is-invalid': props.touched.dia_chi && props.errors.dia_chi
														})}
														placeholder="Address 1 *"
														id="dia_chi"
														name="dia_chi"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.dia_chi}
													/>
													{props.touched.dia_chi && props.errors.dia_chi && (
														<div id="invalid-feedback">{props.errors.dia_chi}</div>
													)}
												</div>
												<div className="form-two Form-abc">
													<input
														type="text"
														className={classNames('Zip', {
															'is-invalid': props.touched.Ma_buudien && props.errors.Ma_buudien
														})}
														placeholder="Mabuudien/Zip * "
														id="Ma_buudien"
														name="Ma_buudien"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.Ma_buudien}
													/>
													{props.touched.Ma_buudien && props.errors.Ma_buudien && (
														<div id="invalid-feedback">{props.errors.Ma_buudien}</div>
													)}
													<input type="text" placeholder="Code giam gia *" />
													<input
														type="text"
														className={classNames('Phone *', {
															'is-invalid': props.touched.sdt && props.errors.sdt
														})}
														placeholder="Mobile Phone * "
														id="sdt"
														name="sdt"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.sdt}
													/>
													{props.touched.sdt && props.errors.sdt && <div id="invalid-feedback">{props.errors.sdt}</div>}

													<div className="checkout__input" style={{ color: '#f0f0e9' }}>
														<select
															value={props.values.phi_van_chuyen}
															onChange={props.handleChange}
															onBlur={props.handleBlur}
															className={classNames('form-control', {
																'is-invalid': props.touched.phi_van_chuyen && props.errors.phi_van_chuyen
															})}
															id="phi_van_chuyen"
															name="phi_van_chuyen"
														>
															<option value={'20000'}>Giao trong tuần!</option>
															<option value={'60000'}>Giao trong 24h!</option>
														</select>
														{setPhivc(parseInt(props.values.phi_van_chuyen))}
														{props.touched.dia_chi && props.errors.dia_chi && (
															<div id="invalid-feedback">{props.errors.dia_chi}</div>
														)}
														<div>.</div>
														<select>
															<option>-- Country --</option>
															<option>Vietnames</option>
															<option>Bangladesh</option>
															<option>UK</option>
															<option>India</option>
															<option>Pakistan</option>
															<option>Ucrane</option>
															<option>Canada</option>
															<option>Dubai</option>
														</select>
														{bill.is_loading ? (
															<div className="produced" style={{ paddingTop: '20px' }}>
																<a href="#!" className="hvr-skew-backward" aria-hidden="true" disabled={props}>
																	Produced To Buy
																</a>
															</div>
														) : (
															<div className="produced" style={{ paddingTop: '20px' }}>
																<button type="submit" className="hvr-skew-backward">
																	Produced To Buy
																</button>
															</div>
														)}

														{/*       {login.is_loading ? (
                      <label className="hvr-skew-backward">
                        <input
                          type="submit"
                          defaultValue="login"
                          aria-hidden="true"
                          disabled={props}
                        />
                      </label>
                    ) : (
                      <label className="hvr-skew-backward">
                        <input type="submit" defaultValue="login" />
                      </label>
                    )} */}
													</div>
												</div>
											</Form>
										)}
									</Formik>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="order-message">
									<p>Shipping Order</p>
									<textarea
										name="message"
										placeholder="Notes about your order, Special Notes for Delivery"
										rows={16}
										defaultValue={''}
									/>
									<label>
										<input type="checkbox" /> Shipping to bill address
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="review-payment">
						<h2>Review &amp; Payment</h2>
					</div>

					<div className="table-responsive cart_info">
						<table className="table-heading simpleCart_shelfItem">
							<tbody>
								<tr>
									<th className="table-grid">Item</th>
									<th>Prices</th>
									<th>Amount </th>
									<th>Subtotal</th>
								</tr>
								{dsCart.cart.ctcart.map((sp) => (
									<tr className="cart-header" key={sp.id}>
										<td className="ring-in">
											<a href="single.html" className="at-in">
												<img src={`${sp.product.hinh}`} className="img-responsive" alt="abc" />
											</a>
											<div className="sed">
												<h5>
													<a href="single.html">{sp.product.tensp}</a>
												</h5>
												<p>(At vero eos et accusamus et iusto odio dignissimos ducimus ) </p>
											</div>
											<div className="clearfix"> </div>
											<div className="close1"> </div>
											<a href="#!" onClick={delete_Cart.bind(this, sp.product.id)}>
												<span className="close1" />
											</a>
										</td>
										<td>${sp.product.gia}</td>
										<td className="cart_quantity">
											<div className="cart_quantity_button">
												<div className="quantity-select">
													<div className="entry value-minus" onClick={decrementCount}>
														&nbsp;
													</div>
													<div className="entry value">
														<span>{count}</span>
													</div>
													<div className="entry value-plus active" onClick={incrementCount}>
														&nbsp;
													</div>
												</div>
											</div>
										</td>
										<td className="item_price">${total_price(dsCart.cart.ctcart, 'so_luong', 'gia')}</td>
										<td className="add-check">
											<a
												className="item_add hvr-skew-backward"
												href="#!"
												onClick={addToCart.bind(this, sp.product.id, sp.product.gia, count)}
											>
												Add To Cart
											</a>
										</td>
									</tr>
								))}
								<table className="table table-condensed total-result">
									<tbody>
										<tr>
											<td>gross product</td>
											<td>
												<span>${total_price(dsCart.cart.ctcart, 'so_luong', 'gia')}</span>
											</td>
										</tr>
										<tr>
											<td>Exo Tax</td>
											<td>$2</td>
										</tr>
										<tr className="shipping-cost">
											<td>Shipping Cost</td>
											<td>{phivc}đ</td>
										</tr>

										<tr className="shipping-cost">
											<td>Total</td>
											<td> ${parseInt(total_price(dsCart.cart.ctcart, 'so_luong', 'gia')) + phivc}</td>
										</tr>
									</tbody>
								</table>
							</tbody>
						</table>
					</div>

					<div className="payment-options">
						<span>
							<label>
								<input type="checkbox" /> Direct Bank Transfer
							</label>
						</span>
						<span>
							<label>
								<input type="checkbox" /> Check Payment
							</label>
						</span>
						<span>
							<label>
								<input type="checkbox" /> Paypal
							</label>
						</span>
						<div className="shopper-info">
							<a className="btn btn-primary" href="/">
								Get Quotes
							</a>
							<a className="btn btn-primary" href="/">
								Continue
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Checkout;
