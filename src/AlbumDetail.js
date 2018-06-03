import React from 'react';
import {Text , View , Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';


const AlbumDetail = (props)=>{
    return(
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle} >
                    <Image
                    style = {styles.thumbnailStyle} 
                    source = {{uri : props.album.thumbnail_iamge}}
                    />
                </View>
                <View style = {styles.headerContentStyle} >
                <Text style = {styles.headerTextStyle} >{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            <Text>Image Detail</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                style = {styles.iamgeStyle}
                source = {{uri : props.album.image}} />
            </CardSection>
            <CardSection>
                <Button/>
            </CardSection>
        </Card>
       
    )
}

const styles = {
    headerContentStyle : {
        justifyContent : 'space-around',
        flexDirection : 'column'
    },
    thumbnailStyle : {
        height : 50,
        width : 50,
    },
    headerTextStyle : {
        fontSize : 18
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight : 10.
    },
    iamgeStyle : {
        height : 300,
        flex : 1,
        width : null,
    }
}

export default AlbumDetail;