import React , {Component} from 'react';
import {ScrollView ,View , Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component{
    constructor(props){
        super(props)
        this.state = {
            albums : [],
        }
    }
    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>{
            this.setState({albums : response.data})
        })
    }

    renderAlbums = ()=>{
        this.state.albums.map(album=>{
            return <AlbumDetail key = {album.title} album = {album} />
        })
    }
    render(){
    return(
        <ScrollView>
            <Text>Hello world</Text>
            <Text>{this.renderAlbums}</Text>
        </ScrollView>
    )
}
}

export default AlbumList