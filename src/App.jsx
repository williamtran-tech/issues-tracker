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
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)

        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    // Properties Validation - use static function to do so 
    // static get propTypes() {
    //     return {
    //         issue_id: React.PropTypes.number.isRequired,
    //         issue_title: React.PropTypes.string
    //     };
    // }

    render() {
        const issue = this.props.issue;

        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}
// issue.completionDate ? issue.completionDate.toDateString() : '' -> Specifying if-then-else


class IssueAdd extends React.Component {
    render() {
        return (
            <div>
                This is a placeholder for Issue Add entry form
            </div>
        );
    }
}

// This is for Dynamic Pass Data - Store data in global variable
const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14,
        completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel',
    },
];

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issues Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode);
