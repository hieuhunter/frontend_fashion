import React from "react";
import Layout from "../Layout";

const Typo = () => {
  return (
    <Layout>
      <div>
        <h2>Loading Buttons</h2>

        <button class="buttonload">
          <i class="fa fa-spinner fa-spin"></i>Loading
        </button>

        <div className="banner-top">
          <div className="container">
            <h1>Short Codes</h1>
            <em />
            <h2>
              <a href="index.html">Home</a>
              <label>/</label>Short Codes
            </h2>
          </div>
        </div>
        {/*content*/}
        <div className="container">
          <div className="page">
            {/*button*/}
            <div className="grid_3 grid_4">
              <div className="page-header">
                <h3>Headings</h3>
              </div>
              <div className="bs-example">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h1 id="h1-bootstrap-heading">
                          h1. Bootstrap heading
                          <a
                            className="anchorjs-link"
                            href="#h1.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon" />
                          </a>
                        </h1>
                      </td>
                      <td className="type-info">Semibold 36px</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 id="h2-bootstrap-heading">
                          h2. Bootstrap heading
                          <a
                            className="anchorjs-link"
                            href="#h2.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon" />
                          </a>
                        </h2>
                      </td>
                      <td className="type-info">Semibold 30px</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 id="h3-bootstrap-heading">
                          h3. Bootstrap heading
                          <a
                            className="anchorjs-link"
                            href="#h3.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon" />
                          </a>
                        </h3>
                      </td>
                      <td className="type-info">Semibold 24px</td>
                    </tr>
                    <tr>
                      <td>
                        <h4 id="h4.-bootstrap-heading">
                          h4. Bootstrap heading
                          <a
                            className="anchorjs-link"
                            href="#h4.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon" />
                          </a>
                        </h4>
                      </td>
                      <td className="type-info">Semibold 18px</td>
                    </tr>
                    <tr>
                      <td>
                        <h5 id="h5-bootstrap-heading">
                          h5. Bootstrap heading
                          <a
                            className="anchorjs-link"
                            href="#h5.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon" />
                          </a>
                        </h5>
                      </td>
                      <td className="type-info">Semibold 14px</td>
                    </tr>
                    <tr>
                      <td>
                        <h6 id="h6-bootstrap-heading">h6. Bootstrap heading</h6>
                      </td>
                      <td className="type-info">Semibold 12px</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*buttons*/}
            <div className="page-header">
              <h3>Buttons</h3>
            </div>
            <p className="grid1">
              <button type="button" className="btn btn-lg btn-default">
                Default
              </button>
              <button type="button" className="btn btn-lg btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-lg btn-success">
                Success
              </button>
              <button type="button" className="btn btn-lg btn-info">
                Info
              </button>
              <button type="button" className="btn btn-lg btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-lg btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-lg btn-link">
                Link
              </button>
            </p>
            <p className="grid1 ">
              <button type="button" className="btn btn-1 btn-default">
                Default
              </button>
              <button type="button" className="btn btn-1 btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-1 btn-success">
                Success
              </button>
              <button type="button" className="btn btn-1 btn-info">
                Info
              </button>
              <button type="button" className="btn btn-1 btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-1 btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-1 btn-link">
                Link
              </button>
            </p>
            <p className="grid1">
              <button type="button" className="btn btn-sm btn-default">
                Default
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-sm btn-success">
                Success
              </button>
              <button type="button" className="btn btn-sm btn-info">
                Info
              </button>
              <button type="button" className="btn btn-sm btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-sm btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-sm btn-link">
                Link
              </button>
            </p>
            <p className="grid1">
              <button type="button" className="btn btn-xs btn-default">
                Default
              </button>
              <button type="button" className="btn btn-xs btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-xs btn-success">
                Success
              </button>
              <button type="button" className="btn btn-xs btn-info">
                Info
              </button>
              <button type="button" className="btn btn-xs btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-xs btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-xs btn-link">
                Link
              </button>
            </p>
            {/*//button*/}
            {/*bages*/}
            <div className="page-header">
              <h3>Badges</h3>
            </div>
            <p>
              <a href="#!">
                Inbox <span className="badge">42</span>
              </a>
            </p>
            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="active">
                <a href="#!">
                  Home <span className="badge">42</span>
                </a>
              </li>
              <li role="presentation">
                <a href="#!">Profile</a>
              </li>
              <li role="presentation">
                <a href="#!">
                  Messages <span className="badge">3</span>
                </a>
              </li>
            </ul>
            {/*//bages*/}
            {/*alerts*/}
            <div className="page-header">
              <h3>Alerts</h3>
            </div>
            <div className="alert alert-success" role="alert">
              <strong>Well done!</strong> You successfully read this important
              alert message.
            </div>
            <div className="alert alert-info" role="alert">
              <strong>Heads up!</strong> This alert needs your attention, but
              it's not super important.
            </div>
            <div className="alert alert-warning" role="alert">
              <strong>Warning!</strong> Best check yo self, you're not looking
              too good.
            </div>
            <div className="alert alert-danger" role="alert">
              <strong>Oh snap!</strong> Change a few things up and try
              submitting again.
            </div>
            {/*//alerts*/}
            {/*nav*/}
            <div className="page-header">
              <h3>Navs</h3>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a href="#!">Home</a>
                </li>
                <li role="presentation">
                  <a href="#!">Profile</a>
                </li>
                <li role="presentation">
                  <a href="#!">Messages</a>
                </li>
              </ul>
              <ul className="nav nav-pills" role="tablist">
                <li role="presentation" className="active">
                  <a href="#!">Home</a>
                </li>
                <li role="presentation">
                  <a href="#!">Profile</a>
                </li>
                <li role="presentation">
                  <a href="#!">Messages</a>
                </li>
              </ul>
            </div>
            {/*//nav*/}
            {/*Progress bars*/}
            <div className="page-header">
              <h3>Progress bars</h3>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "60%" }}
              >
                <span className="sr-only">60% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "40%" }}
              >
                <span className="sr-only">40% Complete (success)</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "20%" }}
              >
                <span className="sr-only">20% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "60%" }}
              >
                <span className="sr-only">60% Complete (warning)</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "80%" }}
              >
                <span className="sr-only">80% Complete (danger)</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "60%" }}
              >
                <span className="sr-only">60% Complete</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-success"
                style={{ width: "35%" }}
              >
                <span className="sr-only">35% Complete (success)</span>
              </div>
              <div
                className="progress-bar progress-bar-warning"
                style={{ width: "20%" }}
              >
                <span className="sr-only">20% Complete (warning)</span>
              </div>
              <div
                className="progress-bar progress-bar-danger"
                style={{ width: "10%" }}
              >
                <span className="sr-only">10% Complete (danger)</span>
              </div>
            </div>
            {/*//Progress bars*/}
            {/*Panels*/}
            <div className="page-header">
              <h3>Panels</h3>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
              </div>
              {/* /.col-sm-4 */}
              <div className="col-sm-4">
                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                  </div>
                  <div className="panel-body">Panel content</div>
                </div>
              </div>
              {/* /.col-sm-4 */}
            </div>
            {/*//Panels*/}
            {/*labels*/}
            <div className="page-header">
              <h3>Labels</h3>
            </div>
            <h1 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h1>
            <h2 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h2>
            <h3 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h3>
            <h4 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h4>
            <h5 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h5>
            <h6 className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h6>
            <p className="grid2">
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </p>
            {/*//labels*/}
            {/*table*/}
            <div className="page-header">
              <h3>Tables</h3>
            </div>
            <div className="bs-example" data-example-id="simple-table">
              <table className="table">
                <caption>Optional table caption.</caption>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /example */}
            {/*//table*/}
            {/*Contextual classes*/}
            <div className="page-header">
              <h3>Contextual classes</h3>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <colgroup>
                  <col className="col-xs-1" />
                  <col className="col-xs-7" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <code>.active</code>
                    </th>
                    <td>Applies the hover color to a particular row or cell</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>.success</code>
                    </th>
                    <td>Indicates a successful or positive action</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>.info</code>
                    </th>
                    <td>Indicates a neutral informative change or action</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>.warning</code>
                    </th>
                    <td>Indicates a warning that might need attention</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>.danger</code>
                    </th>
                    <td>
                      Indicates a dangerous or potentially negative action
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="bs-example"
              data-example-id="contextual-table"
              style={{ border: "1px solid #eee" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="active">
                    <th scope="row">1</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="success">
                    <th scope="row">3</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="info">
                    <th scope="row">5</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="warning">
                    <th scope="row">7</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="danger">
                    <th scope="row">9</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*//Contextual classes*/}
            {/*Forms*/}
            <div className="page-header">
              <h3>Forms</h3>
            </div>
            <div className="bs-example" data-example-id="simple-form-inline">
              <form className="form-inline">
                <div className="form-group">
                  <label className="sr-only" htmlFor="exampleInputEmail3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail3"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="exampleInputPassword3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword3"
                    placeholder="Password"
                  />
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-default">
                  Sign in
                </button>
              </form>
            </div>
            <div
              className="bs-example"
              data-example-id="simple-horizontal-form"
            >
              <form className="form-horizontal">
                <div className="form-group">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 control-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 control-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="bs-example" data-example-id="disabled-fieldset">
              <form>
                <fieldset disabled>
                  <div className="form-group">
                    <label htmlFor="disabledTextInput">Disabled input</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Disabled input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="disabledSelect">Disabled select menu</label>
                    <select id="disabledSelect" className="form-control">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Can't check this
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
            {/*//forms*/}
          </div>
        </div>
        {/*brand*/}
        <div className="container">
          <div className="brand">
            <div className="col-md-3 brand-grid">
              <img src="/images/ic.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic1.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic2.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="/images/ic3.png" className="img-responsive" alt="abc" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/*//brand*/}
      </div>
    </Layout>
  );
};
export default Typo;
