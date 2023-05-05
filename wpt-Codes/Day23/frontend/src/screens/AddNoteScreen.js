import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { addNote } from '../actions/notesActions'

const AddNoteScreen = (props) => {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const dispatch = useDispatch()

  const addNotesStore = useSelector((store) => store.addNotes)
  const { loading, response, error } = addNotesStore

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/home')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addNote(title, contents))
  }

  const onCancel = () => {
    props.history.push('/home')
  }

  return (
    <div>
      <Header title="Add Note" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contents</label>
          <textarea
            onChange={(e) => {
              setContents(e.target.value)
            }}
            className="form-control"
            rows="3"></textarea>
        </div>
        <div className="mb-3">
          <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNoteScreen
