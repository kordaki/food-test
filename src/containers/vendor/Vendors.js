import React, { Component } from 'react';
import Header from '../header/Header';
import { connect } from 'react-redux';
import {isEqual} from "lodash"
import * as vendorActions from '../../redux/actions/vendorActions'
import Box from '../../components/box/Box';
import './Vendors.scss'

class Vendors extends Component {

    componentDidMount() {
        this.getVendorData();
    }

    componentDidUpdate(prevProps){
        const {selectedFilter} = this.props;
        if(!isEqual(prevProps.selectedFilter , selectedFilter)){
            this.getVendorData();
        }
    }

    getVendorData = () => {
        // load data clear or with filters
        const {selectedFilter, getVendors} = this.props
        getVendors(selectedFilter);
    }

    render() {
        const {vendors, errorMessage} = this.props;
        return (
            <div className="vendors">
                <Header />
                <div className="container">
                    {vendors?.map(vendor => 
                        <Box {...vendor.data} />
                        )}
                </div>
                this will be vendors list soon ^_^
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedFilter: state.filter.selectedFilter,
        vendors: state.vendor.vendorList,
        errorMessage: state.vendor.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getVendors: (data) => dispatch(vendorActions.getVendors(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
