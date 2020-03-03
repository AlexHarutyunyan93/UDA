import React from 'react';
import {HeaderComponent} from "./Header.component";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userActions} from "../../actions";

function HeaderContainer({ logout }){

    return <HeaderComponent {...{logout}} />;
}

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(userActions, dispatch),
});

const connectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

export { connectedHeader as Header };

