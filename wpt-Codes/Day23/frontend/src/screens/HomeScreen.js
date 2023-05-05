import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { getNotes } from '../actions/notesActions'

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const notes = useSelector((store) => store.notes)
  const { error, response, loading } = notes

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getNotes())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddNote = () => {
    props.history.push('/add-note')
  }

  return (
    <div>
      <Header title="Home" />
      <button onClick={onAddNote} className="btn btn-primary float-end">
        Add Note
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Contents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((note) => {
              return (
                <tr>
                  <td>{note.id}</td>
                  <td>{note.title}</td>
                  <td>{note.contents}</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default HomeScreen
