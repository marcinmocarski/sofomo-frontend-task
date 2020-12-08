import { useSelector } from 'react-redux';
import './App.scss';
import LocationMap from '../LocationMap/LocationMap';
import SearchBar from '../SearchBar/SearchBar';
import SearchList from '../SearchList/SearchList';
import LocationInfo from '../LocationInfo/LocationInfo';
import { USER_LOCATION_INFO_TITLE, CURRENT_LOCATION_INFO_TITLE } from '../LocationInfo/LocationInfo.constants';
import { getCords } from './App.utils';

const App = ({
  searchHandler
}) => {
  const searchList = useSelector(store => store.searchList) || [];
  const userLocationInfo = useSelector(store => store.userLocationInfo) || {};
  const currentLocationInfo = useSelector(store => store.currentLocationInfo) || {};
  const userCords = getCords(userLocationInfo);
  const currentCords = getCords(currentLocationInfo);

  return (
    <div className="App">
      <div className="allSearchesListContainer">
        <SearchList />
      </div>
      <div className="userLocationMapContainer">
        <LocationMap cords={userCords} />
      </div>
      <div className="userLocationInfoContainer">
        <LocationInfo
          info={userLocationInfo}
          title={USER_LOCATION_INFO_TITLE}
        />
      </div>
      <div className="searchBoxContainer">
        <SearchBar
          searchHandler={searchHandler} />
      </div>
      <div className="lastSearchLocationMapContainer">
        <LocationMap cords={currentCords} />
      </div>
      <div className="lastSearchInfoContainer">
        <LocationInfo
          info={currentLocationInfo}
          title={CURRENT_LOCATION_INFO_TITLE}
        />
      </div>
    </div>
  );
}

export default App;
