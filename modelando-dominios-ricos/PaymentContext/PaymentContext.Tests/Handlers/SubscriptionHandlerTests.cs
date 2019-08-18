using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PaymentContext.Domain.Commands;
using PaymentContext.Domain.Handlers;
using PaymentContext.Tests.Mocks;

namespace PaymentContext.Tests.Handlers
{
    [TestClass]
    public class SubscriptionTestHandler
    {
        [TestMethod]
        public void ShouldReturnErrorWhenDocumentExists() 
        {
            var handler = new SubscriptionHandler(new FakeStudentRepository(), new FakeEmailService());
            var command = new CreateBoletoSubscriptionCommand() {
                FirstName = "Bruce",
                LastName = "Wayne",
                Document = "99999999999",
                Email = "fernandolopes@live.com",
                BarCode = "123456789",
                BoletoNumber = "1234567890",
                PaymentNumber = "123321",
                PaidDate = DateTime.Now,
                ExpireDate = DateTime.Now.AddMonths(1),
                Total = 60,
                TotalPaid = 60,
                Payer = "Wayne Corp",
                PayerDocument = "12345678911",
                PayerDocumentType = Domain.Enums.EDocumentType.CPF,
                PayerEmail = "batman@dc.com",
                Street = "asdas",
                Number = "asdf",
                Neighborhood = "asdf",
                City = "as",
                State = "as",
                Country = "as",
                ZipCode = "123456789",
            };

            handler.Handle(command);
            Assert.AreEqual(false, handler.Valid);
        }   
    }
}