import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.arrayholder = [
      'this is quick',
      'this is very very annoying',
      'brown fox jumps too high',
      'react native is awesome',
      'feel the thrill',
      'Enjoy your life',
      'Rock on! man.',
    ];
    this.newArray = [];
  }
  clear = () => {
    this.search.clear();
  };
  _searchList = text => {
    const renderData = this.arrayholder.filter(item => {
      return item.indexOf(text) > -1;
    });
    this.setState({ newArray: renderData, search: text });
  };
  render() {
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.containerStyle}>
        <SearchBar
          searchIcon={{ size: 25 }}
          onChangeText={text => this._searchList(text)}
          onClear={text => this._searchList('')}
          placeholder="Enter the text to search"
          value={this.state.search}
        />

        <FlatList
          style={{ flex: 1, margin: 15 }}
          data={this.state.newArray}
          renderItem={({ item }) => <Text style={{ margin: 10 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={{ justifyContent: 'center', alignSelf: 'center' }}>
              No elements to render!!
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
