import { authReducer, initialAuthState } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authReducer(initialAuthState, action);

      expect(result).toBe(initialAuthState);
    });
  });
});
