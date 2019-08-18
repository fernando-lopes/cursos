using Microsoft.VisualStudio.TestTools.UnitTesting;
using PaymentContext.Domain.Enums;
using PaymentContext.Domain.ValueOjects;

namespace PaymentContext.Tests
{
    [TestClass]
    public class DocumentTests
    {
        // Red, Green, Refactor
        [TestMethod]
        public void ShouldReturnErrorWhenCNPJIsInvalid() 
        {
           var doc = new Document("123", EDocumentType.CNPJ);
           Assert.IsTrue(doc.Invalid);

        }

        [TestMethod]
        public void ShouldReturnSuccessWhenCNPJIsValid() 
        {
           var doc = new Document("29393453000107", EDocumentType.CNPJ);
           Assert.IsTrue(doc.Valid);
        }

        [TestMethod]
        public void ShouldReturnErrorWhenCPFIsInvalid() 
        {
           var doc = new Document("123", EDocumentType.CPF);
           Assert.IsTrue(doc.Invalid);
        }

        [TestMethod]
        [DataTestMethod]
        [DataRow("09519547096")]
        [DataRow("27256987072")]
        [DataRow("87775024003")]
        public void ShouldReturnSuccessWhenCPFIsValid(string cpf) 
        {
           var doc = new Document(cpf, EDocumentType.CPF);
           Assert.IsTrue(doc.Valid);
        }
    }
}