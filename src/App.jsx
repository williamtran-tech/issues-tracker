const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>
                This is a placeholder for Issue Filter
            </div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 }
        return (
            <table style={borderedStyle}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>ID</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1} issue_title="Error in console when clicking Add" />
                    <IssueRow issue_id={2} issue_title="Missing bottom border on panel" />
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    // Properties Validation - use static function to do so 
    static get propTypes() {
        return {
            issue_id: React.PropTypes.number.isRequired,
            issue_title: React.PropTypes.string
        };
    }
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };
        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.issue_title}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>
                This is a placeholder for Issue Add entry form
            </div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issues Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode);
