import React from 'react'

const Fork = ({stars}) => (
	<div>
		<div className="material-icons mdl-badge mdl-badge--overlap" data-badge={stars||0}>
			<a href="https://github.com/ooade/NextSimpleStarter"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Initially forked from <span className="redHere">here</span></button></a>
		</div>
		<style>{`
		  .mdl-button {text-transform:none;}
		  .mdl-badge {position:absolute; top:30px; right:15px;}
			.redHere {text-transform:uppercase; font-weight:normal;}
		`}</style>
	</div>
)

export default Fork
