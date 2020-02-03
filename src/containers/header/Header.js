import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as filterActions from "../../redux/actions/filterActions"
import * as vendorActions from "../../redux/actions/vendorActions"
import "./Header.scss"

class Header extends Component {

    componentDidMount() {
        this.props.getFilters()
    }

    handleSelectFilter = (value) => {
        this.props.updateSelectedFilter(value);
    }

    render() {
        const { filters, selectedFilter } = this.props;
        return (
            <div className="header">
                <div className="filters">
                    {filters?.map(filter =>
                        <div
                            onClick={() => this.handleSelectFilter(filter.value)}
                            className={`filter-item ${selectedFilter?.includes(filter.value) ? 'active' : ''}`}
                        >
                            {filter.title}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filter.filters,
        selectedFilter: state.filter.selectedFilter,
        errorMessage: state.filter.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFilters: () => dispatch(filterActions.getFilters()),
        updateSelectedFilter: (obj) => dispatch(filterActions.updateSelectedFilter(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);