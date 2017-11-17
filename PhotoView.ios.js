import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class PhotoView extends Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems:'center', justifyContent:'center' }}
                centerContent={true}
                maximumZoomScale={this.props.maximumZoomScale}
                minimumZoomScale={this.props.minimumZoomScale}>

                <TouchableWithoutFeedback
                    onPress={this.props.onTap ? this.props.onTap : function() {}}>

                    <FastImage {...this.props}/>

                </TouchableWithoutFeedback>

            </ScrollView>
        );
    }
}
