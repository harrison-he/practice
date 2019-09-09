import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getToDoItems, postToDoItem, deleteToDoItem } from './../Actions/ToDoActions'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getToDoItems())
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch(postToDoItem(event.target[0].value))
    }

    handleClick(event) {
        console.log(event.target)
        this.props.dispatch(deleteToDoItem(event.target.id))
    }

    render() {
        const { toDoItems } = this.props

        return (
            <div style ={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <AppBar position="static">
                    <Typography style={{display: "flex", justifyContent: "space-around"}}>
                        <Link href="/" color="inherit">To Do List</Link>
                        <Link href="/recurring.html" color="inherit">Recurring Items</Link>
                    </Typography>
                </AppBar>
                <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "5px", marginTop: "5px", width: "100%" }}>
                    <div>
                    <Typography variant="h2">To Do List</Typography>
                    <FormControl component="form" id="to-do-form" style={{width: "100%"}} onSubmit={this.handleSubmit}>
                        <OutlinedInput type="text" name="input" id="input" placeholder="Enter To Do Item..." fullWidth={true} />
                        <Button variant="outlined" type="submit" fullWidth={true}>Add</Button>
                    </FormControl>
                    </div>
                </Card>
                <List style={{width: "100%"}}>
                    {toDoItems && toDoItems.map((toDoItem, i) =>
                        <Card key={i} style={{ marginBottom: "5px" }}>
                            <ListItem style={{display: "flex", justifyContent: "space-around"}}>
                                <ListItemText primary={toDoItem.toDo} />
                                <Button id={toDoItem._id} onClick={this.handleClick}><Typography id={toDoItem._id}>Delete</Typography></Button>
                            </ListItem>
                        </Card>
                    )}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        {
            toDoItems: state.toDoReducer.toDoItems,
            loading: state.toDoReducer.loading,
            error: state.toDoReducer.error
        }
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            getToDoItems: dispatch => getToDoItems(dispatch)
        }
    )
}

export default connect(mapStateToProps)(ToDoList)
