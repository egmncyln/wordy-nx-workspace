import renderer from 'react-test-renderer';
import Form from './Form';

test('Form component snapshot', () => {
  const component = renderer
    .create(
      <Form>
        <button id='button' type='submit'>
          Button
        </button>
      </Form>
    )
    .toJSON();

  const snapshot = `
    <form
      className="form"
      onSubmit={[Function]}
    >
      <button
        id="button"
        type="submit"
      >
        Button
      </button>
    </form>
 `;

  expect(component).toMatchInlineSnapshot(snapshot);
});
