import React from 'react'
import { Component } from 'react'   

let l = window.versions.node

interface Props {
    
}
class hello extends Component <Props > {
    constructor(props: Props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    node: {l}
                </div>
            </div>   
        );
    }
}

export default hello;