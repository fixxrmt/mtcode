import data from '../Indian Loan Database 1k Sample.json';

export default function handler(req, res) {

  const { number } = req.query;

  if (number) {
    const result = data.filter(
      item => item.MOB_NUMBER == number
    );

    return res.status(200).json(result);
  }

  res.status(200).json(data);
}
