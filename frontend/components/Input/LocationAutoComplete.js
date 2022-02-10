import { View, Text } from 'native-base';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getLocationsByName } from '../../api/map';

export const LocationAutoComplete = ({ onChange }) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState({});

    const handleSearchTextChange = (text) => {
        setLoading(true);
        getLocationsByName(text)
            .then(result => {
                debugger;
                debugger;
                const [response, error] = result;
                if (response && response.data) {
                    const data = response.data.map((element, idx) => ({
                        ...element,
                        label: idx + 1 + " " + element.display_name,
                        locationName: element.display_name,
                        latitude: Number(element.lat),
                        longitude: Number(element.lon),
                        value: idx,
                        id: idx,
                        key: idx
                    }));
                    setItems(data);
                }
                setLoading(false);
            })
    }

  return (
      <DropDownPicker
          searchable={true}
          disableLocalSearch={true}
          onChangeSearchText={handleSearchTextChange}
          onSelectItem={onChange}
          loading={loading}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
      />
  );
};