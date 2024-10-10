import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box, Flex, Button } from 'rebass'
import { useDispatch } from 'react-redux'
import { startCreateArtist } from '../redux/slices/artistSlice'
import CustomToast from '../components/CustomToast'
import useToast from '../hooks/useToast'

const FormContainer = styled.form`
  background-color: #171719;
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  min-width: 500px;
  height: 100%;
  margin: 2rem auto;
`

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #212124;
  border: 1px solid #3a3a3d;
  color: #ffffff;
  border-radius: 4px;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #212124;
  border: 1px solid #3a3a3d;
  color: #ffffff;
  border-radius: 4px;
  resize: vertical;
  min-height: 170px;
`

const FileInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #212124;
  border: 1px solid #3a3a3d;
  color: #ffffff;
  border-radius: 4px;
  &::file-selector-button {
    background-color: #212124;
    color: #ffffff;
    border: 1px solid #3a3a3d;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
`

const SubmitButton = styled(Button)`
  background-color: #212124;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2c2c30;
  }
`

export default function CreateArtist() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  useToast(show, () => setShow(false));
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const musicData = {
      name: formData.get('name'),
      biography: formData.get('biography'),
      image: formData.get('coverPic'),
    }
    dispatch(startCreateArtist(musicData));
    setShow(true);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CustomToast text='Artist created successfully' display={show} background='#00FFFF' />
      <Box mb={4}>
        <h2 className={css`
          color: #ffffff;
          text-align: center;
          margin-bottom: 1.5rem;
        `}>Register new Artist</h2>
      </Box>
      <Box mb={3}>
        <Label htmlFor="name">Name</Label>
        <InputField type="text" id="name" name="name" required />
      </Box>
      <Box mb={3}>
        <Label htmlFor="biography">Short bio</Label>
        <TextArea 
          id="biography" 
          name="biography" 
          placeholder="Enter the biography of the artist..."
          className={css`
            &:focus {
              outline: none;
              box-shadow: 0 0 0 2px #212124;
            }
          `}
        />
      </Box>
      <Box mb={4}>
        <Label htmlFor="coverPic">Cover Picture</Label>
        <FileInput type="file" id="coverPic" name="coverPic" accept="image/*" required />
      </Box>
      <Flex justifyContent="center">
        <SubmitButton type="submit">Create Artist</SubmitButton>
      </Flex>
    </FormContainer>
  )
}