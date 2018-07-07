import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from '../pages/Home';
import Add from '../pages/Add';
import Header from './Header';
import Loader from '../components/Loader';
import MealCard from '../components/MealCard';
import Meal from '../components/Meal';
import { fetchMealsIfNeeded, removeMeal } from '../modules/meals/actions';
import { changeNewMeal, postMeal } from '../modules/newMeal/actions';
import { toggleMobileSideMenu } from '../modules/ui/actions';
import SideMenu from '../components/SideMenu';

class App extends Component {
  onMealInputChange = (e) => {
    this.props.changeNewMeal(this.getMeal(e.target));
  };

  onAddMeal = () => {
    this.props.postMeal({
      dishes: this.props.newMeal.dishes.split(','),
      time: this.props.newMeal.time
    })
  };

  removeMeal = (time) => {
    this.props.removeMeal(time);
  };

  onWrapperClick = () => {
    this.props.toggleMobileSideMenu(false);
  };

  static onSideMenuClick(e) {
    e.stopPropagation();
  };

  static getMeal (input) {
    return {
      [input.dataset.type]: input.value
    };
  };

  getMealsListEls () {
    return this.props.meals.map((m, i) => {
      const items = m.dishes.map((d, index) => <Meal key={index} order={index + 1} title={d} />);
      return <MealCard removeMeal={this.removeMeal.bind(this, m.time)} key={i} title={m.time} items={items} />
    });
  };

  render() {
    return (
      <div onClick={this.onWrapperClick} className="l-wrapper">
        <Header/>
        <SideMenu onClick={App.onSideMenuClick} isShown={this.props.isSideMenuShown}/>
        <Switch>
          <Route
            exact
            path="/"
            render={
              () => <Home
                shouldDisplayList={this.props.meals && this.props.meals.length}
                meals={this.getMealsListEls()}
                fetchMealsIfNeeded={this.props.fetchMealsIfNeeded}/>
            }
          />
          <Route path="/add" render={
            () =>
              <Add
                onAddMeal={this.onAddMeal}
                onMealInputChange={this.onMealInputChange}
                value={this.props.newMeal} />
            }
          />
        </Switch>
        <Loader isLoading={this.props.isLoading}/>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  meals: state.meals,
  isLoading: state.ui.isLoading,
  newMeal: state.newMeal,
  isSideMenuShown: state.ui.showMobileSideMenu
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchMealsIfNeeded,
  changeNewMeal,
  postMeal,
  removeMeal,
  toggleMobileSideMenu
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
