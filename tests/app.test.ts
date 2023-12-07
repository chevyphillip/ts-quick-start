import { greetingFormatBuilder } from '../src/greetingFormatBuilder';

describe('greetingFormatBuilder', () => {
  it('should return the formatted greeting message', () => {

    // Arrange
    const returnSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {
      return;
    });

    // Act
    const actualGreeting = greetingFormatBuilder({ firstName: 'Chevon', lastName: 'Phillip', greeting: 'How are you!' });

    // Assert
    expect(actualGreeting).toEqual('How are you! My name is Chevon Phillip.');

    // Clean up
    returnSpy.mockRestore();
  });
});
