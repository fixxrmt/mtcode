import data from '../Indian Loan Database 1k Sample.json';

export default function handler(req, res) {
  res.status(200).json(data);
}
