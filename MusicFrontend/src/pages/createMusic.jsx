import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box, Flex, Button } from 'rebass'
import { useDispatch, useSelector } from 'react-redux'
import { startGetArtists } from '../redux/slices/artistSlice'

const FormContainer = styled.form`
  background-color: #171719;
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  min-width: 500px;
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

const SelectField = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #212124;
  border: 1px solid #3a3a3d;
  color: #ffffff;
  border-radius: 4px;
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

export default function CreateMusic() {
  const artistState = useSelector(state => state.artist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetArtists())
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const musicData = {
      title: formData.get('title'),
      artist: formData.get('artist'),
      category: formData.get('category'),
      music: formData.get('music'),
      coverPic: formData.get('image'),
    }
    dispatch(addMusicStart(musicData));
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Box mb={4}>
        <h2 className={css`
          color: #ffffff;
          text-align: center;
          margin-bottom: 1.5rem;
        `}>Register New Music</h2>
      </Box>
      <Box mb={3}>
        <Label htmlFor="title">Title</Label>
        <InputField type="text" id="title" name="title" required />
      </Box>
      <Box mb={3}>
        <Label htmlFor="artist">Artist</Label>
        <SelectField id="artist" name="artist" required>
          <option value="">Select an artist</option>
          {
            artistState.loading?
              <option disabled>Loading...</option> :
            artistState.error !== ''?
              <option disabled>{artistState.error}</option> :
            artistState.artists.map(artist => (
              <option key={artist.id} value={artist.id}>{artist.name}</option>
            ))
          }
        </SelectField>
      </Box>
      <Box mb={3}>
        <Label htmlFor="category">Category</Label>
        <SelectField id="category" name="category" required>
          <option value="">Select a category</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="classical">Classical</option>
          <option value="electronic">Electronic</option>
        </SelectField>
      </Box>
      <Box mb={3}>
        <Label htmlFor="music">Music File</Label>
        <FileInput type="file" id="music" name="music" accept="audio/*" required />
      </Box>
      <Box mb={4}>
        <Label htmlFor="image">Cover Picture</Label>
        <FileInput type="file" id="image" name="image" accept="image/*" required />
      </Box>
      <Flex justifyContent="center">
        <SubmitButton type="submit">Register Music</SubmitButton>
      </Flex>
    </FormContainer>
  )
}