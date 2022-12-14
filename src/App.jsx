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
        // console.log("Render counting %d", issue.id);
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
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });

        //clear the form for the next input
        form.owner.value = "";
        form.title.value = "";
    }

    render() {
        return (
            <div>
                <form name="issueAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="owner" placeholder="Owner" />
                    <input type="text" name="title" placeholder="Title" />
                    <input type="submit" value="Add" />
                </form>
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
    // Create constructor for init state
    constructor() {
        super();
        // Initializing the state is as simple as setting the this.state variable to the state object.
        this.state = { issues: [] };

        // the "this" = constructor | After 2s the constructor is called, the create issue will be called
        this.createIssue = this.createIssue.bind(this);
    }

    // componentDidMount use when the React component is ready to use
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        setTimeout(() => {
            this.setState({ issues: issues });
        }, 500);
    }

    //method to create Issue
    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssues.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    render() {
        return (
            <div>
                <h1>Issues Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode);