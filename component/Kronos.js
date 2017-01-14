import React, { Component } from 'react'
import Kronos from  '../dist/bundle.js'
import Moment from 'moment'

export default class KronosDateTime extends Component {

    constructor(props) {
        super(props)
        this.state = {
          initDateTime: Moment().toISOString(),
        }
    }

    onChange(datetime) {
        this.setState({ initDateTime: datetime,})
        console.log(datetime)
    }

    render() {
        return (
            <div className='kronos'>
                <Kronos
                    date={this.state.initDateTime}
                    onChangeDateTime={::this.onChange}
                    placeholder={'Choisir une date'}
                    format={'DD MMMM YYYY'}
                    options={
                        {
                            moment: { lang: 'fr' },
                        }
                    }
                />
                <Kronos
                    time={this.state.initDateTime}
                    onChangeDateTime={::this.onChange}
                    placeholder={'Choisir une heure'}
                    format={'HH:mm'}
                    options={
                        {
                            moment: { lang: 'fr' },
                            format: { hour: 'HH:mm' },
                        }
                    }
                />
            </div>
        )
    }
}