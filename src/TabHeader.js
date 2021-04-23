import { PureComponent } from 'react'

class TabHeader extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Text>0000</Text>
        <View>
          <Text>1111</Text>
        </View>
        <React.Fragment>
          <View>
            <Text>2222</Text>
          </View>
        </React.Fragment>
        <React.Fragment>
          <View>
            <Text>333</Text>
          </View>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default TabHeader
