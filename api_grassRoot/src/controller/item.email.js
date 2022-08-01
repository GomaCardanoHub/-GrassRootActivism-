const sendEmail=require( '../mail/mailer.helper');
dotenv.config();
const {
    SUPERADMIN_EMAIL, SUPERADMIN_FNAME, SUPERADMIN_LNAME, FRONTEND_APP_URL,
  } = process.env;
/**
 * @description it sends response to the verify email route
 * @param {object} req
 * @param {object} res
 * @returns {void}
 */
 const respondAfterVerifyingEmail = async (req, res) => {
    const { statusCode } = res;
    if (statusCode === ok) {
      const { id } = req.whereCondition;
      const {
        approveUserEmailContentHTML,
        approveUserEmailContentPlainText,
      } = generateApproveEmailContent(
        { id }, { firstName: SUPERADMIN_FNAME, lastName: SUPERADMIN_LNAME }, FRONTEND_APP_URL,
      );
      await sendEmail(
        {
          mailSentTo: SUPERADMIN_EMAIL,
          mailSubject: 'Approve a new user on SSM',
          contentHTML: approveUserEmailContentHTML,
          contentText: approveUserEmailContentPlainText,
        },
      );
      return res.status(200).json({ msg: `Succès`, data: null })
    } else if (statusCode === internalServerError) {
        return res.status(400).json({ msg: `Enregistrement echoue`, data: null })
    }
  };

module.exports = respondAfterVerifyingEmail;