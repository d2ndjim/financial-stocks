import companyReducer, {loadCompanies} from '../redux/stocks/companySlice'
import { loadProfile } from '../redux/stocks/profileSlice'

it("loadCompany should return a promise", () => {
  expect(loadCompanies()).toEqual(expect.any(Function));
});

it("loadProfile should return a promise", () => {
  expect(loadProfile()).toEqual(expect.any(Function));
});

it("Expect company reducer to handle loadCompanies", () => {
  expect(companyReducer({}, [loadCompanies.fulfilled])).not.toBeNull();
});