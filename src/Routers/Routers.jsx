import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { Home } from '@/pages';
import { HolyWorldWikiHome, classicAndSpeedrun, liteAnarchy } from '../db/data';
import { getAllAddresses } from '../utils/helpers/helpers';

const Routers = () => {
  const [HolyWorldWikiHomeAddresses, setHolyWorldWikiHomeAddresses] = useState(
    getAllAddresses(HolyWorldWikiHome)
  );

  const [classicAndSpeedrunAddresses, setClassicAndSpeedrunAddresses] =
    useState(getAllAddresses(classicAndSpeedrun));
  
  const [liteAnarchyAddresses, setLiteAnarchyAddresses] = useState(
    getAllAddresses(liteAnarchy)
  );

  return (
    <div>
      <Router>
        <Routes>
          {HolyWorldWikiHomeAddresses.map((address) => (
            <Route
              path={address}
              element={<Home sectionData={HolyWorldWikiHome} />}
              key={address}
            />
          ))}

          {classicAndSpeedrunAddresses.map((address) => (
            <Route
              path={address}
              element={<Home sectionData={classicAndSpeedrun} />}
              key={address}
            />
          ))}

          {liteAnarchyAddresses.map((address) => (
            <Route
              path={address}
              element={<Home sectionData={liteAnarchy} />}
              key={address}
            />
          ))}

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
