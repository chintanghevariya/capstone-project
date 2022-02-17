import { View, Text } from 'native-base';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getLocationsByName } from '../../api/map';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function LocationAutoComplete (onChange){
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
                if (response && response.data && response.data.predictions) {
                    const data = response.data.predictions.map(
                        (element, idx) => ({
                            ...element,
                            label:
                                idx +
                                1 +
                                " " +
                                element.description,
                            locationName:
                                element.structured_formatting.main_text,
                            value: idx,
                            id: idx,
                            key: idx,
                        })
                    );
                    setItems(data);
                }
                setLoading(false);
            })
            return(
                
                 <View></View>
                
            )
    }

  return (
      <View>
            
       
        <DropDownPicker
        containerStyle={{ shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,marginLeft : '10%', marginTop: '10%', alignItems: 'center', width: "80%", borderColor:'#4C5B79'}}
        arrowStyle={{width: -2}}
        placeholder="Type the location ..."
        itemsStyle = {{borderColor: '#ffffff'}}
        labelStyle={{
            fontWeight: "bold"
          }}
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
      </View>
  );
};