//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HomeComponent from '../components/HomeComponent'
import {homeProperties} from '../propMapper/homeProps'

 const HomeContainer = connect(homeProperties)(HomeComponent);
export default HomeContainer
