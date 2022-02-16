import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }

    mostraLikes(likers) {
        if (likers > 0) {
            return (
                <Text style={styles.curtidas}>{likers} {likers > 1 ? "curtidas" : "curtida"}</Text>
            )
        }
    }

    like() {
        if (this.state.feed.likeada === false) {
            this.setState({
                feed: {
                    ...this.state.feed,
                    likeada: true,
                    likers: this.state.feed.likers + 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...this.state.feed,
                    likeada: false,
                    likers: this.state.feed.likers - 1
                }
            })
        }
    }

    render() {

        let feedItem = this.state.feed;

        return (
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image
                        source={{ uri: feedItem.imgperfil }}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.textoPerfil}>{feedItem.nome}</Text>
                </View>
                <Image
                    resizeMode='cover'
                    source={{ uri: feedItem.imgPublicacao }}
                    style={styles.fotoPub}
                />
                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            source={feedItem.likeada == true ? require('../../img/likeada.png') : require('../../img/like.png')}
                            style={styles.pubBtn}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../img/send.png')}
                            style={styles.pubBtn}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    {this.mostraLikes(feedItem.likers)}
                </View>
                <View style={styles.rodape}>
                    <Text style={styles.autor}>{feedItem.nome}</Text>
                    <Text style={styles.descricao}>{feedItem.descricao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    fotoPerfil: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    textoPerfil: {
        fontSize: 16,
        color: '#000',
        marginLeft: 8,
        textAlign: 'left'
    },
    fotoPub: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 8
    },
    pubBtn: {
        height: 30,
        width: 30,
        marginRight: 10
    },
    rodape: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    autor: {
        fontWeight: 'bold',
        paddingLeft: 8,
        fontSize: 14
    },
    descricao: {
        fontSize: 14,
        paddingLeft: 5
    },
    curtidas: {
        paddingLeft: 8,
        fontWeight: 'bold'
    }
})

export default Lista;