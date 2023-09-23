import React, { useEffect, useState } from 'react'
import BoxRigth from '../../../components/BoxRight/BoxRigth'
import { Call_Post_Api } from '../../../CallApis/CallApis'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function Search() {

    const { keySearch } = useParams();

    const [apis, setApi] = useState([])

    useEffect(() => {
        Call_Post_Api(
            null, null, null, '/music/getSearchName/' + keySearch
        ).then((data) => {
            setApi(data.metadata)
        })
    }, [])

    return (
        <div style={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div>
                    <div>
                        Search
                    </div>
                    <div>
                        Bài Hát
                    </div>
                    <div>
                        {apis.map(api => (
                            <Link to={`/Detail/${api._id}`} style={{
                                color: 'black',
                                textDecoration: 'none'
                            }}>
                                <div style={{
                                    width: '700px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    paddingTop: '20px',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid gray',
                                    paddingBottom: '10px'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        paddingTop: '20px'
                                    }}>
                                        <div>
                                            <img src={api.music_img}
                                                style={{
                                                    width: '100px',
                                                    height: '100px'
                                                }}
                                            />
                                        </div>
                                        <div style={{
                                            fontSize: '18px',
                                            marginLeft: '10px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <div>
                                                {api.music_name}
                                            </div>
                                            <div style={{
                                                fontSize: '14px'
                                            }}>
                                                Đang cập nhật
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <div>
                                            OFFICIAL
                                        </div>
                                        <div style={{
                                            marginLeft: '10px'
                                        }}>
                                            SQ
                                        </div>
                                    </div>

                                    <div style={{
                                        fontSize: '16px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <div>
                                            Tim
                                        </div>
                                        <div>
                                            Share
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <BoxRigth />
                </div>
            </div>
        </div>
    )
}

export default Search