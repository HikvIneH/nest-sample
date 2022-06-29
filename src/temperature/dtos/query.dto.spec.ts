import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { QueryDTO } from './query.dto';

it('should throw when scale is not a valid enum value.', async () => {
  const query = { scale: 'invalid enum', degrees: 78.8 };
  const ofQuery = plainToInstance(QueryDTO, query);
  const errors = await validate(ofQuery);
  expect(errors.length).not.toBe(0);
  expect(errors[0].constraints).toEqual({
    isEnum: 'Scale only accepts celcius or fahrenheit',
  });
});
