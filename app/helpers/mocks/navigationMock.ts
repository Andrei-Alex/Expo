const mockNavigate = jest.fn();

export const useNavigation = jest.fn().mockImplementation(() => {
  return {
    navigate: mockNavigate
  };
});

export const navigation = {
  navigate: mockNavigate
};
